<?php
namespace IZiviPlanningBundle\Entity;


class UserEntity extends Entity
{
    /**
     * @var User $user
     *
     * @JMS\MaxDepth(1)
     * @Gedmo\Blameable(on="create")
     * @ORM\ManyToOne(targetEntity="IZiviPlanningBundle\Entity\User")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id", nullable=true, onDelete="SET NULL")
     */
    protected $user;

    /**
     * Set user
     *
     * @param  User $user
     * @return Entity
     */
    public function setUser(User $user)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get user
     *
     * @return User
     */
    public function getUser()
    {
        return $this->user;
    }
}