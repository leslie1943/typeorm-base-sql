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

