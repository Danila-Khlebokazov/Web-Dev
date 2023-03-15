n = int(input())
arr = [int(i) for i in input().split(" ")]

for _ in range(n):
    if _%2 == 0:
        print(arr[_], end=" ")