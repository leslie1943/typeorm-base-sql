### TRUNC
```sql
  SELECT TRUNC(sysdate) 'Current Date' FROM DUAL

  'Current Date'
  2021-11-11 00:00:00
```

### NVL(exp1,exp2): return exp2 if exp1 is null, otherwise return exp1
```sql
  SELECT 
    * 
    FROM 
        Member mm 
    WHERE 
        TRUNC(sysdate) BETWEEN (mm.startDate) AND NVL(mm.endDate,TO_DATE('31-DEC-4096','DD-MON-YYYY'))
        OR
        mm.startDate > TRUNC(sysdate)
```

### INSTR
| id | code | name |
| ---- | ----- | ---- |
| 1 | x001 | leslie |
| 2 | x002 | justin |
| 3 | x003 | mark |
| 4 | x011 | dong |

```sql
  SELECT * FROM Member mm WHERE INSTR(mm.code,mm.id)
  -- return the first three ones.
  SELECT * FROM Member mm WHERE INSTR(mm.name,'s')

  SELECT
    *
  FROM
    base1943.POST_DIM pd
  WHERE
    INSTR(pd.POST_NAME,'Executive')
  GROUP BY
    pd.COMMON_LEVEL
  ORDER BY
    pd.COMMON_LEVEL ASC

  -- 1274	POST001274	Executive Assistant	2021-04-19		2340	N	Approved	Y	1	
  -- 1024	POST001024	Executive Assistant	2021-04-19		3884	N	Approved	Y	2	
  -- 1492	POST001492	Executive Assistant	2021-04-19		2841	N	Approved	Y	3	
  -- the last 2nd column is COMMON_LEVEL
```

### GROUP BY
| tid | tname | ttype | tscor | 
| ---- | ----- | ---- |---- |
| 1 | 张三 | 语文 | 80 |
| 1 | 张三 | 数学 | 98 |
| 1 | 张三 | 英语 | 65 |
| 2 | 李四 | 语文 | 70 |
| 2 | 李四 | 数学 | 80 |
| 2 | 李四 | 英语 | 90 |
```sql
SELECT tname as '姓名',
	max(CASE ttype WHEN '语文' then tscor ELSE 0 END) '语文',
	max(CASE ttype WHEN '数学' then tscor ELSE 0 END) '数学',
	max(CASE ttype WHEN '英语' then tscor ELSE 0 END) '英语'
FROM testscore
GROUP BY tname
```
| 姓名 | 语文 | 数学 | 英语 | 
| ---- | ----- | ---- |---- |
| 张三 | 80 | 98 | 65 |
| 李四 | 70 | 80 | 90 |