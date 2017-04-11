<?php
	/* Check Data */
		if(empty($_POST["text"])) {
			exit();
		}
	/* /Check Data */
	/* SQL */
		try {
			$conn = new PDO("mysql:host=localhost;dbname=dbname", "user", "pass");
			$conn->exec("set names utf8");
		}
		catch (PDOException $e) {
			echo "Connection failed: " . $e->getMessage();
		}

		$query = $conn->prepare("INSERT INTO tasks (text, time, ip) VALUES (:text, :time, :ip)");
		$query->bindParam(":text", $_POST["text"], PDO::PARAM_STR, 18);
		$query->bindParam(":time", date("Y-m-d H:i:s"), PDO::PARAM_STR, 32);
		$query->bindParam(":ip", $_SERVER["REMOTE_ADDR"], PDO::PARAM_STR, 18);
		$query->execute();
		$result = $query->fetchColumn();
		
		
		if($query->rowCount() > 0)
		{
			$status = "Task added";
		}
		else
		{
			$status = "Task not added";
		}
		
		echo json_encode(array(
			"status" =>	$status
		));
	/* /SQL */
?>