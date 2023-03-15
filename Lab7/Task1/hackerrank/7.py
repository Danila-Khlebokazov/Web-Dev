cube = lambda x: x**3# complete the lambda function 

def fibonacci(n):
    def feb_in(g):
        if g == 0:
            return 0
        if g in (1, 2):
            return 1
        return feb_in(g - 1) + feb_in(g - 2)
    # return a list of fibonacci numbers
    return [feb_in(i) for i in range(n)]

if __name__ == '__main__':
    n = int(input())
    print(list(map(cube, fibonacci(n))))