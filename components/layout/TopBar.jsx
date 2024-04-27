"use client";
import { useEffect, useState } from "react";
import { Add, Person, Search } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { dark } from "@clerk/themes";
import Loader from "../Loader";

export default function TopBar() {
  const { user, isLoaded } = useUser();
  const [loading, setloading] = useState(true);
  const [userData, setUserData] = useState({});
  const [search, setSearch] = useState("");

  const router = useRouter();

  // const getUser = async () => {
  //   const response = await fetch(`/api/user/${user.id}`);
  //   const data = await response.json();
  //   if (data) {
  //     setUserData(data);
  //     setloading(false);
  //   }
  // };

  // useEffect(() => {
  //   if (user) {
  //     getUser();
  //   }
  // }, [user]);

  // return loading || !isLoaded ? (
  //   <Loader />
  // ) :  
  return (
    <div className="flex justify-between items-center mt-6">
      <div className="relative">
        <input
          type="text"
          className="search-bar"
          placeholder="Search posts, people, ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search
          className="search-icon"
          onClick={() => router.push(`/search/posts/${search}`)}
        />
      </div>

      <button
        className="create-post-btn"
        onClick={() => router.push("/create-post")}
      >
        <Add /> <p>Create A Post</p>
      </button>

      <div className="flex gap-4 md:hidden">
        <Link href={`/profile/${userData._id}/posts`}>
          <Person sx={{ fontSize: "35px", color: "white" }} />
        </Link>

        <UserButton
          appearance={{ baseTheme: dark }}
          forceRedirectUrl="/sign-in"
        />
      </div>
    </div>
  );
}
