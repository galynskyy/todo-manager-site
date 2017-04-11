<?php
	/* SQL */
		try {
			$conn = new PDO("mysql:host=localhost;dbname=dbname", "user", "pass");
			$conn->exec("set names utf8");
		}
		catch (PDOException $e) {
			echo "Connection failed: " . $e->getMessage();
		}

		$query = $conn->prepare("DELETE FROM tasks WHERE ip = :ip");
		$query->bindParam(":ip", $_SERVER["REMOTE_ADDR"], PDO::PARAM_STR, 18);
		$query->execute();
		$result = $query->fetchColumn();
		
		
		if($query->rowCount() > 0)
		{
			$status = true;
		}
		else
		{
			$status = false;
		}
		
		echo json_encode($status);
	/* /SQL */
?>