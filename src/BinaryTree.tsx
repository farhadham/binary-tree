import { motion } from "framer-motion";

function TreeNode({ node, x, y }: any) {
  return (
    <motion.div
      className="relative text-white font-bold"
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 40 }}
      style={{ top: `${y}px`, left: `${x}px` }}
    >
      <div className="bg-gradient-to-r from-[#227C9D] to-[#17C3B2] rounded-full w-16 h-16 flex items-center justify-center mb-2 shadow-md break-all text-center">
        {node.parent}
      </div>
      {node.childLeft && (
        <>
          <div
            className="absolute transform origin-top-left "
            style={{ top: "calc(100% + 8px)", left: "0px" }}
          >
            <TreeNode
              node={node.childLeft}
              x={x === 0 ? x - 300 : x > 0 ? -0.5 * x : 0.5 * x}
              y={60}
            />
          </div>
        </>
      )}
      {node.childRight && (
        <>
          <div
            className="absolute transform origin-top-right"
            style={{ top: "calc(100% + 8px)", right: "0px" }}
          >
            <TreeNode
              node={node.childRight}
              x={x === 0 ? x + 300 : x > 0 ? 0.5 * x : -0.5 * x}
              y={60}
            />
          </div>
        </>
      )}
    </motion.div>
  );
}

function BinaryTree({ nodes }: any) {
  console.log(nodes);
  function renderNode(node: any, x: number, y: number) {
    if (!node.parent) {
      return null;
    }

    return <TreeNode node={node} x={x} y={y} />;
  }

  return (
    <div className="flex flex-col items-center">{renderNode(nodes, 0, 0)}</div>
  );
}

export default BinaryTree;
