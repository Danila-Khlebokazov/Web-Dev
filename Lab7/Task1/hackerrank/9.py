from functools import reduce
if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    arr = [i for i in arr]
    arr = reduce(lambda x,y: x+[y] if not y in x else x, arr,[])
    arr.sort()
    print(arr[len(arr)-2])