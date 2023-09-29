<?php
class RegisterMember {
    private $memberNo;
    private $error;
    private $success;
    private $storage = "data.json";
    private $stored_users;
    private $new_user;




    public function __construction($memberNo){

        $this->memberNo = trim($this->memberNo);
        $this->memberNo = filter_var($memberNo, FILTER_SANITIZE_STRING);

        $this->stored_users = json_decode(file_get_contents($this->storage), true);

        $this->new_user = [
            "memberNo" =>  $this->memberNo
        ];

        if ($this->checkFieldValues()) {
            $this->insertUser();
        }

    }


    
    public function checkFieldValues(){

        if(empty($this->memberNo)){
            $this->error = "Memebership Number is required.";
            return false;
        }else{
            return true;
        }

    }



    public function memberNoExists(){

        foreach($this->stored_users as $user){
            if($this->memberNo == $user['memberNo']) {
                $this->error = "Membership Number already taken, please choose a different one.";
                return true;
            }
        }
        return false;

    }



    public function insertUser(){

        if ($this->memberNoExists() == FALSE) {
            array_push($this->stored_user, $this->new_user);
            if(file_put_contents($this->storage, json_encode($ths->stored_users, JSON_PRETTY_PRINT))){
                return $this->success = "Your registration was successful";
            } else {
                return $this->error = "Something went wrong, please try again";
            }
        }
    }

}