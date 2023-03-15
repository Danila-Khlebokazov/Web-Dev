n = int(input())
arr = [int(i) for i in input().split(" ")]

arr.reverse()

for _ in arr:
    print(_, end=" ")