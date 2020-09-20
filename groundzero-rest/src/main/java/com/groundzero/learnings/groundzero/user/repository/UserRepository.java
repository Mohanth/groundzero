package com.groundzero.learnings.groundzero.user.repository;

import com.groundzero.learnings.groundzero.user.Entity.UserEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository <UserEntity,Integer> {
}
