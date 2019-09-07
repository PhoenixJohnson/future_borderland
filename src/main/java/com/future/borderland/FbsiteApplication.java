package com.future.borderland;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableJpaRepositories(basePackages = {"com.future.borderland.dao.dalinterface"})
@EntityScan(basePackages = "com.future.borderland.entity")
@EnableTransactionManagement
public class FbsiteApplication {

	public static void main(String[] args) {
		SpringApplication.run(FbsiteApplication.class, args);
	}

}
