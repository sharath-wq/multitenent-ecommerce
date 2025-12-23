import { cookies as getCookies } from "next/headers";

interface IProps {
  prefix: string;
  value: string;
}

export const generateAuthCookie = async ({ prefix, value }: IProps) => {
  const cookie = await getCookies();
  cookie.set({
    name: `${prefix}-token`,
    value: value,
    httpOnly: true,
    path: "/",
    // TODO: Ensure cross-domain cookie sharing
    // sameSite: 'none'
    // domain: ''
  });
};
