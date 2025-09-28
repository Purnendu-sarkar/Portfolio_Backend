import bcryptjs from "bcryptjs";
import httpStatus from "http-status";
import { prisma } from "../../config/db";
import { envVars } from "../../config/env";
import { generateToken } from "../../utils/jwt";
import AppError from "../../errorHelpers/AppError";


const login = async (payload: { email: string; password: string }) => {
  const user = await prisma.user.findUnique({ where: { email: payload.email } });
  if (!user) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Invalid credentials");
  }

  const isPasswordMatched = await bcryptjs.compare(payload.password, user.password);
  if (!isPasswordMatched) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Invalid credentials");
  }

  const jwtPayload = { id: user.id, email: user.email, role: user.role };
  const accessToken = generateToken(jwtPayload, envVars.JWT_ACCESS_SECRET, envVars.JWT_ACCESS_EXPIRES);

  return { accessToken };
};

export const AuthService = {
  login
};