package com.future.borderland;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableAutoConfiguration
@EnableJpaRepositories("com.future.borderland.dao")
@EnableTransactionManagement
@ComponentScan
public class FbsiteApplication {

	public static void main(String[] args) {
		SpringApplication.run(FbsiteApplication.class, args);
	}

}
