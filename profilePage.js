




<form onSubmit={handleSubmit}>
<TextField value={firstName} onChange={(event) => {setFirstName(event.target.value)} } label="First Name" />
<TextField value={lastName} onChange={(event) => { setLastName(event.target.value) }} label="Last Name" />
<TextField value={linkedIn} onChange={(event) => { setLinkedIn(event.target.value) }} label="LinkedIn" />
<TextField value={resume} onChange={(event) => { setResume(event.target.value) }} label="Resume" />
<TextField value={coverLetter} onChange={(event) => { setCoverLetter(event.target.value) }} label="company logo upload" />
<Button type='submit' variant='contained'>submit</Button>
</form>