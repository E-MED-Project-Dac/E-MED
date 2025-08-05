//package com.emed.security;
//
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import com.emed.daos.UserDAO;
//import com.emed.entities.User;
//
//import lombok.AllArgsConstructor;
//
//
//
//@Service //spring bean containing B.L
//@Transactional
//@AllArgsConstructor
//public class CustomUserDetailsServiceImpl implements UserDetailsService {
//	//depcy
//	private final UserDAO userDao;
//
//	@Override
//	public UserDetails loadUserByUsername(String email) 
//			throws UsernameNotFoundException {
//		// invoke dao's method
//		User user=userDao.findByEmail(email)
//				.orElseThrow(() ->
//				new UsernameNotFoundException("Invalid email !!!!"));
//		return user;
//	}
//
//}
