import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  const prisma = new PrismaClient();

  try {
    const users = await prisma.user.findMany();

    res.status(200);
    res.json({ success: true, users });
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect();
  }
};
