nums = []
result = ""
print("Enter the number of strings (n):")
n = int(input())


for i in range(n):
    valid = False

    while valid == False:
        print("Enter number " + str(i + 1) + " (length " + str(n) + ", only 0 and 1):")
        text = input()

        only_binary = True
        for c in text:
            if c != "0" and c != "1":
                only_binary = False

        if len(text) != n:
            print("The string must have exactly " + str(n) + " characters. Try again.")
        elif only_binary == False:
            print("Only the characters 0 and 1 are allowed. Try again.")
        elif text in nums:
            print("This string was already entered . Try again.")
        else:
            valid = True

    nums.append(text)


for i in range(n):
    if nums[i][i] == "0":
        result = result + "1"
    else:
        result = result + "0"

print("A binary string that is not in the list is: " + result)