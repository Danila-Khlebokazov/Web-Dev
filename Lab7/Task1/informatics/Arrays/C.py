n = int(input())
arr = [int(i) for i in input().split(" ")]
cnt = 0
for _ in range(n):
    if arr[_] > 0:
        cnt += 1

print(cnt)