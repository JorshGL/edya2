import React, { useEffect, useState } from "react";
import {
  BsSearch,
} from 'react-icons/bs'
import { api } from "./../../../api/api";

const Search = ({ setUsers }) => {
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    const searchUser = async () => {
      const { data: response } = await api.get(`users/search/?searchString=${searchString}`);
      setUsers(response.data);
      console.log(response.data);
    }
    searchUser();
  }, [searchString])

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex px-6 items-center gap-3 w-5/6 rounded-xl bg-custom-gray-soft border-[0.5px] border-custom-gray-main">
        <BsSearch />
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchString(e.target.value)}
          className="p-3 w-full bg-transparent focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Search;
