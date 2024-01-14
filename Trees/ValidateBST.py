class TreeNode:
	def __init__(self, val):
		self.val = val
		self.left = None
		self.right = None
def validateBinarySearchTree(root: TreeNode) -> int:
      def validate(root,leftChild ,rightChild):
            if root is None:
                  return None
            if root.val>leftChild and root.val<rightChild:
                  return validate(root.left,leftChild,root.val) and validate(root.right,root.val,rightChild)
            else:
                  return False
      ans= validate(root,-float('inf'),float('inf'))
      return 1 if ans==True else 0