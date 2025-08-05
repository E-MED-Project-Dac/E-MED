package com.emed.entities;

import java.util.Collection;
import java.util.List;

//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter  @NoArgsConstructor
@Entity
public class User extends BaseEntity{ //implements UserDetails{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="user_id")
private Long userId;
	
	@Column(length=50)
private String email;
	
	@Column(length=300)
private String password;
	
	@Enumerated(EnumType.STRING)
private Role role;
	
	@Column(name="is_deleted")
private boolean isDeleted;

	public User(String email, String password, Role role) {
		super();
		this.email = email;
		this.password = password;
		this.role = role;
	}
	
//	
//	@Override
//	public Collection<? extends GrantedAuthority> getAuthorities() {
//		// TODO Auto-generated method stub
//		return List.of(new SimpleGrantedAuthority(this.role.name()));
//	}
//
//	@Override
//	public String getUsername() {
//		
//		return this.email;
//	}
	
	
}
