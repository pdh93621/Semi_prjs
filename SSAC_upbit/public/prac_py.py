import sys

def add_func(a):
    print(a[0] + a[1])

a = sys.argv[1:]

add_func(a)