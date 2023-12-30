CREATE DATABASE IF NOT EXISTS FordMunstangsDB;

USE FordMunstangsDB;

CREATE TABLE FordMunstangs(
   Id                     INT PRIMARY KEY IDENTITY (1,1) NOT NULL,
   name                   VARCHAR(42) NOT NULL 
  ,MainImgUrl             VARCHAR(257) NOT NULL
  ,ImageUrls0             VARCHAR(263) NOT NULL
  ,ImageUrls1             VARCHAR(242) NOT NULL
  ,ImageUrls2             VARCHAR(239) NOT NULL
  ,ImageUrls3             VARCHAR(261) NOT NULL
  ,ImageUrls4             VARCHAR(228) NOT NULL
  ,Generation             VARCHAR(32)
  ,Engine                 VARCHAR(47) NOT NULL
  ,ProductionYear         INTEGER  NOT NULL
  ,EndYear                INTEGER  NOT NULL
  ,BodyType               VARCHAR(20) NOT NULL
  ,EngineArchitecture     VARCHAR(179)
  ,NumberSeats            INTEGER  NOT NULL
  ,NumberDoors            INTEGER  NOT NULL
  ,FuelType               VARCHAR(8) NOT NULL
  ,Power                  VARCHAR(42) NOT NULL
  ,Displacement           VARCHAR(14) NOT NULL
  ,NumberCylinders        INTEGER  NOT NULL
  ,EngineConfiguration    VARCHAR(93) NOT NULL
  ,FuelInjectionSystem    VARCHAR(31) NOT NULL
  ,Distributor            VARCHAR(24) NOT NULL
  ,EngineOilCapacity      VARCHAR(13) NOT NULL
  ,Length                 VARCHAR(7) NOT NULL
  ,Width                  VARCHAR(7) NOT NULL
  ,Height                 VARCHAR(7) NOT NULL
  ,Wheelbase              VARCHAR(7) NOT NULL
  ,TurningDiameter        VARCHAR(13) NOT NULL
  ,PropulsionArchitecture VARCHAR(69) NOT NULL
  ,Drivetrain             VARCHAR(17) NOT NULL
  ,FrontSuspension        VARCHAR(74) NOT NULL
  ,RearSuspension         VARCHAR(46) NOT NULL
  ,FrontBrakes            VARCHAR(15) NOT NULL
  ,RearBrakes             VARCHAR(15) NOT NULL
  ,SteeringType           VARCHAR(44) NOT NULL
  ,PowerSteering          VARCHAR(32)
  ,TiresAndRimSizeSize    VARCHAR(67) NOT NULL
  ,Trim                   VARCHAR(24)
  ,SpecialPackage         VARCHAR(49)
);

