import { MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Sidebaritems(role: string) {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <UserOutlined />,
      children: [
        {
          label: <Link href={`${role}/account-profile`}>Account Profile</Link>,
          key: "account-profile",
        },
        {
          label: <Link href={`${role}/account-profile`}>Change Password</Link>,
          key: "change-password",
        },
      ],
    },
  ];

  if (role === "student") return defaultSidebarItems;
}
