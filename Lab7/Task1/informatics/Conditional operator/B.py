year = int(input())

def isLeap(year: int) -> str:
    if year%4 == 0 and year%100 != 0 or year%400 == 0:
        return "YES"
    else:
        return "NO"

print(isLeap(year))