import math
n = int(input())
cnt = 0
a = math.sqrt(n)

for i in range(1, int(a)+1):
    if n%i == 0: 
        if i*i == n:
            cnt += 1
        else:
            cnt += 2

print(cnt)