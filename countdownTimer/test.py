import time

hours = 1
minutes = 5
seconds = 6

totalSec = (hours * 60 * 60) + (minutes * 60) + seconds

print(totalSec)


while True:
    print(totalSec)
    totalSec = totalSec - 1
    print(f"minutes: {totalSec // 60}")
    print(f"seconds: {(totalSec // (totalSec // 60))}")
    time.sleep(1)