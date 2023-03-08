import React, { useState } from "react";
import { motion } from "framer-motion";
import BinaryTree from "./BinaryTree";
import generateTreeObject from "./utils/generateTreeObject";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [treeData, setTreeData] = useState({});

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
    const values = event.currentTarget.value
      .split(" ")
      .filter((value) => value !== "");
    const tree = generateTreeObject(values);
    setTreeData(tree);
  };

  return (
    <div className="p-4 flex justify-center flex-col">
      <form
        className="flex flex-col items-center gap-6 my-16"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <motion.label
          className="font-bold text-4xl text-[#1a1b1b]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 40 }}
        >
          Enter values{" "}
          <span className="font-normal text-[#363636] text-2xl">
            (Ex: Ali Naghi Taghi Yahya)
          </span>
        </motion.label>
        <motion.input
          className="border rounded-full border-gray-300 focus:outline-none focus:focus:ring-1 focus:ring-[#17C3B2] px-3 py-2 w-full max-w-[640px]"
          type="text"
          value={inputValue}
          onChange={(event) => handleInput(event)}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 40,
            delay: 0.2,
          }}
        />
      </form>
      {Object.keys(treeData).length > 0 && <BinaryTree nodes={treeData} />}
    </div>
  );
};

export default App;
