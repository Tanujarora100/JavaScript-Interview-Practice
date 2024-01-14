from Trees.ValidateBST import TreeNode



def diameterOfBinaryTree(root: TreeNode) -> int:
    def find_diameter(root):
        if root is None:
            return 0
        left_ans = find_diameter(root.left)
        right_ans = find_diameter(root.right)
        diameterOfBinaryTree.max_diameter = max(diameterOfBinaryTree.max_diameter, left_ans + right_ans)
        return 1 + max(left_ans, right_ans)
    diameterOfBinaryTree.max_diameter = 0
    find_diameter(root)

    return diameterOfBinaryTree.max_diameter