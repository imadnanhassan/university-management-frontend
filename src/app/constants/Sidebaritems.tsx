import { MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function Sidebaritems(role: string) {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <UserOutlined />,
      children: [
        { label: "Account Profile", key: "account-profile" },
        { label: "Change Password", key: "change-password" },
      ],
    },
  ];
  if (role === "student") return defaultSidebarItems;
}
