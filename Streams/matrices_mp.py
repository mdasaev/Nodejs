#!/usr/bin/env python

def matrixMultiply(a,b):
        """ Returns multiplication reslult of two matrices
            Also checks if matrices can be multiplied
        """

#size check
# a[i][m] - size ob matrix a
# b[m][j] - size of matrix b
# so 'm' should be equal

        if len(a[0]) != len(b):
            print "Matrices can not be multiplied"
            exit()



        #initialization of  result matrix

        c = [0]*len(a)
        for i in range(len(a)):
            c[i] = [0] * len(a[i])
            print c
        # taking 1st item list length (there should be at least one item)
            for j in xrange(len(b[0])):
                for i in xrange(len(a)):
                    for m in xrange(len(a[i])):
                        c[i][j] += a[i][m]*b[m][j]


        return c

a1 = [[2,2,2],  # a[i][m] - size ob matrix q
      [4,4,4],
      [6,6,6]]

b1 = [[1,1,1],   # b[m][j] - size of matrix b
      [3,3,3],
      [5,5,5]]

result = matrixMultiply(a1,b1)
print result
