import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import bg from "../../../assets/bg.png";
import QZone from "../QZone/QZone";


const RightNav = () => {
  return (
    <div>
      <h4 className="mt-4">Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle /> Login With Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub /> Login With GitHub
      </Button>{" "}
      <div>
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item> <FaFacebook/>Facebook</ListGroup.Item>
          <ListGroup.Item> <FaTwitter/>Twitter</ListGroup.Item>
          <ListGroup.Item> <FaInstagram/>Instagram</ListGroup.Item>         
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
