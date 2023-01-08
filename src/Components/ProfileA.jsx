import React from "react";
import ProfileHead from "./ProfileHead";
import ProfileDetails from "./ProfileDetails";
import ProfileDetailsMenu from "./ProfileDetailsMenu";
import Entity from "./Entity";

export default function ProfileA() {
  return (
    <>
      <ProfileHead />
      <ProfileDetails />
      <ProfileDetailsMenu />
      <Entity />
    </>
  );
}
