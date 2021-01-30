package com.app.service;

import java.util.List;

import com.app.pojos.Login;

public interface ILoginService {

  Login getLoginDetails(String userName,String password);

  Login getLoginById(Integer id);

  
  List<Login> getAll();
  
}
