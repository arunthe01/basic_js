function calculateTime(n) {
  const beforeTime = Date.now() / 1000; // Get current time in seconds

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }

  const afterTime = Date.now() / 1000; // Get current time again
  const timeDiff = afterTime - beforeTime; // Calculate time difference

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(timeDiff / 3600);
  const minutes = Math.floor((timeDiff % 3600) / 60);
  const seconds = Math.floor(timeDiff % 60);

  console.log("Sum:", sum);
  console.log(
    "Time taken:",
    hours + " hours " + minutes + " minutes " + seconds + " seconds"
  );
}

calculateTime(100000000000);
