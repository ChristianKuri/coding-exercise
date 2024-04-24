import users from "@/demodata/users.json";
import { User, Users } from "@/types";

export function listUsers(): Users {
  return users;
}

export const findUser = (id: string): User | undefined => {
  return users.find((user) => user.id === parseInt(id));
};
