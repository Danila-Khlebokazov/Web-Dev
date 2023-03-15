n = int(input())
arr = [int(i) for i in input().split(" ")]
cnt = 0
for _ in range(1, n-1):
    if arr[_] > arr[_+1] and arr[_] > arr[_-1]:
        cnt += 1

print(cnt)