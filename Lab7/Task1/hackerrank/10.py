if __name__ == '__main__':
    records = []
    lowest = 0
    for _ in range(int(input())):
        name = input()
        score = float(input())
        records.append([score, name])
    
    records.sort()
    lowest = records[0][0]
    for [a,b] in records:
        if a > lowest:
            lowest = a
            break
    for i in records:
        if i[0] == lowest:
            print(i[1])