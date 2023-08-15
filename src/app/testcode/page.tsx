"use client";
import { Dropdown } from "flowbite-react";

export default function testCode() {
  return (
    <div className="h-screen w-screen">
      <Dropdown label="Dropdown button">
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  );
}
