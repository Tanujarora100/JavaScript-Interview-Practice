from typing import List


def reversePolishNotation(expression: List[str]) -> int:
    """
    Calculates the result of a given expression in reverse Polish notation.

    Parameters:
    - expression (List[str]): The expression in reverse Polish notation.

    Returns:
    - int: The result of the expression.
    """
    stack = []
    operands = {'*', '-', '/', '+'}

    def calculateResult(operand, stack):
        op2 = stack.pop()
        op1 = stack.pop()
        result = 0
        if operand == '+':
            result = op1 + op2
        elif operand == '-':
            result = op1 - op2
        elif operand == '*':
            result = op1 * op2
        elif operand == '/':
            result = int(op1 / op2)
        return result

    for i in range(len(expression)):
        if expression[i] not in operands:
            stack.append(int(expression[i]))
        else:
            result = calculateResult(expression[i], stack)
            stack.append(result)

    return stack[-1]