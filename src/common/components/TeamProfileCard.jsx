import { 
    styled, 
    Box, 
    Typography 
} from "@mui/material";

import { 
    Colors 
} from "@/common/constants";

const CardContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(3, 3),
  borderRadius: "10px",
  backgroundColor: Colors.AZTEC,
  width: "260px",
}));

const TeamMemberImg = styled("img")(({ theme }) => ({
  position: "relative",
  width: "200px",
  height: '200px',
  objectFit: 'contain'
}));

const PatternLayout = styled("img")(({ theme }) => ({
  position: "absolute",
  left: "50px",
  top: "80px",
  width: "200px",
}));

const RoleText = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: Colors.Grey,
}));

const TeamMemberName = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "24px",
  color: Colors.White,
  paddingTop: theme.spacing(1)
}));

const TeamMemberDescription = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  color: Colors.White,
  fontWeight: "400",
  marginBlock: theme.spacing(2),
  maxWidth: '170px'
}));
function TeamProfileCard(
    { memberImg, patternImg, name, title, description }) {
  return (
    <CardContainer>
      <TeamMemberImg src={memberImg} alt={"Team member"} />
      <PatternLayout src={patternImg} alt={"Pattern Layout"} />
      <RoleText>
        {title}
      </RoleText>
      <TeamMemberName>
        {name}
      </TeamMemberName>
      <TeamMemberDescription>
        {description}
       </TeamMemberDescription>
    </CardContainer>
  );
}

export default TeamProfileCard;
