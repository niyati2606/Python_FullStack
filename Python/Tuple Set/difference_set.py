set1 = {1,2,3}
set2 = {3,4,5}

#difference_set = set1 - set2
#difference_set = set1 & set2 #set1.interSection(set2)
#difference_set = set1 ^ set2 #set1.symetricDifference(set2)
difference_set = set1 | set2 #set1.union(set2)
print(difference_set)
