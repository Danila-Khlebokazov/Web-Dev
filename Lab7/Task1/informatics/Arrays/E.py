n = int(input())
arr = [int(i) for i in input().split(" ")]
cnt = 0
for _ in range(n-1):
    if arr[_]>0 and arr[_+1]>0 or arr[_]<0 and arr[_+1]<0:
        cnt += 1

print("YES" if cnt > 0 else "NO")