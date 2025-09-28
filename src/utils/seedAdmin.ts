import bcryptjs from "bcryptjs";
import { prisma } from "../config/db";
import { envVars } from "../config/env";

export const seedAdmin = async () => {
    const existingAdmin = await prisma.user.findUnique({ where: { email: envVars.ADMIN_EMAIL } });
    if (existingAdmin) {
        console.log("Admin already exists 🤷");
        return;
    }

    const hashedPassword = await bcryptjs.hash(envVars.ADMIN_PASSWORD, Number(envVars.BCRYPT_SALT_ROUND));
    await prisma.user.create({
        data: {
            name: "Portfolio Owner",
            email: envVars.ADMIN_EMAIL,
            password: hashedPassword,
            role: "ADMIN",
        },
    });
    console.log("Admin seeded successfully 😎");
};