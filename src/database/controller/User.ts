import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '@models/User.js';
import { signToken } from '@utils/auth.js';
import { LoginSessionInterface } from '@ts/interfaces.js';

const router = express.Router();

// POST Login a user
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { username, password }: { username: string; password: string } = req.body;

    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Validate the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = signToken(user);

    if (req.session.userId) {
      res.status(200).json({ message: 'User is already logged in' });
      return;
    }

    // Save session for login
    req.session.save(() => {
      const sessionData = req.session as LoginSessionInterface;
      sessionData.loggedIn = true;
      sessionData.username = user.username;
      sessionData.userId = user.id;
      res.status(200).json({
        message: 'You are successfully logged in',
        token: token
      });
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// GET Logout a user
router.get('/logout', async (req: Request, res: Response) => {
  try {
    // Clear the session data
    req.session.destroy((error) => {
      if (error) {
        res.status(500).json({ message: 'Internal server error. ' + error });
        return;
      }
      res.status(200).json({ message: 'Logout successful' });
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error. ' + error });
  }
});

// GET all users
router.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// GET a single user by ID
router.get('/user/:id', async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// POST create a new user
router.post('/user', async (req: Request, res: Response) => {
  try {
    const username = req.body.username

    // Check if user exists
    const existingUser = await User.findOne({
      where: { username }
    });

    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists.' });
    }

    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// PUT update an existing user
router.put('/user/:id', async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.update(req.body);
    res.json(user);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
});

// POST soft delete a user
router.delete('/user/delete/:id', async (req: Request, res: Response) => {
  try {
    const user = User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await User.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// POST restore a (soft) deleted user
router.post('/user/restore/:id', async (req: Request, res: Response) => {
  try {
    const user = User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await User.restore({ where: { id: req.params.id } });
    res.status(200).json({ message: 'User restored successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
