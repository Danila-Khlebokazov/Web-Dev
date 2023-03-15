n = int(input())
arr = [int(i) for i in input().split(" ")]
cnt = 0
for _ in range(n-1):
    if arr[_] < arr[_+1]:
        cnt += 1

print(cnt)