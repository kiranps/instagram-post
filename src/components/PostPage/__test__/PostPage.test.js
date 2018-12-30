import React, { Component } from "react";
import { mount } from "enzyme";
import PostPage from "../index";
jest.mock("services/post.js");

const asyncComponentTests = done => cb => {
  const wrapper = mount(<PostPage />);
  setTimeout(() => {
    wrapper.update();
    try {
      cb(wrapper);
      done();
    } catch (err) {
      done.fail(err);
    }
  });
};

it("renders PostPage", done => {
  asyncComponentTests(done)(wrapper => {
    expect(wrapper.find("PostPage").length).toEqual(1);
  });
});

it("fetchPost changes loading state to false", done => {
  asyncComponentTests(done)(wrapper => {
    expect(wrapper.instance().state.loading).toEqual(false);
  });
});

//Bug:- Styled__ prefix appears bcoz webpack test config is not reading babel macros config

it("renders five Comment", done => {
  asyncComponentTests(done)(wrapper => {
    expect(wrapper.find("Styled__Comment").length).toEqual(5);
  });
});

it("click on like button increment and decrement the like count", done => {
  asyncComponentTests(done)(wrapper => {
    const likeCount = wrapper.state("likes");
    wrapper.find("LikeIcon").simulate("click");
    expect(wrapper.find("Styled__LikeCount").props().children).toContain(
      likeCount + 1
    );
    wrapper.find("LikeIcon").simulate("click");
    expect(wrapper.find("Styled__LikeCount").props().children).toContain(
      likeCount
    );
  });
});

it("click on like button should change the active state", done => {
  asyncComponentTests(done)(wrapper => {
    expect(wrapper.find("LikeIcon").props().active).toBe(false);
    wrapper.find("LikeIcon").simulate("click");
    expect(wrapper.find("LikeIcon").props().active).toBe(true);
  });
});

it("should add comment when comment is posted", done => {
  asyncComponentTests(done)(wrapper => {
    wrapper.instance().commentRef.current.value = "hello world";
    wrapper.find("Styled__SubmitComment").simulate("click");
    expect(wrapper.find("Styled__Message").length).toBe(6);
    expect(
      wrapper
        .find("Styled__Message")
        .first()
        .props().children
    ).toEqual("hello world");
  });
});
