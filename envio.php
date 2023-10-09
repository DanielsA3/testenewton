<?php 
	
	header('Access-Control-Allow-Origin: *');
	require_once('phpmailer/PHPMailerAutoload.php');

	if ($_POST) {
		extract($_POST);

	    $html = '<b>Teste Newton</b> <br /><br />';
		$html .= '<b>Nome:</b> '.$nome.'<br />';
		$html .= '<b>E-mail:</b> '.$email.'<br />'; 	
		$html .= '<b>Assunto:</b> '.$assunto.'<br />'; 			
		$html .= '<b>Mensagem:</b> '.$mensagem.'<br />';

		$mailer = new PHPMailer();
		$mailer->IsSMTP();
		$mailer->SMTPDebug = 1;
		$mailer->Port = 483;
		$mailer->Host = 'smtp.gmail.com';
		$mailer->SMTPAuth = true;
		$mailer->SMTPSecure = tls;
		$mailer->Username = 'danaugustto@gmail.com';
		$mailer->Password = 'Senha1251';
		$mailer->setFrom('danaugustto@gmail.com', 'Teste Newton');
		$mailer->addAddress('danaugustto@gmail.com');
		$mailer->Subject = 'Teste Newton';
		$mailer->CharSet = 'UTF-8';
		$mailer->Body = $html;
		$mailer->IsHTML(true); 	
		$mailer->Send();

		echo 'sucesso';
	}
?>