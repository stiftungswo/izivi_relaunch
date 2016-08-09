<?php
namespace IZiviPlanningBundle\Entity;

use DateTime;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use JMS\Serializer\Annotation as JMS;

/**
 * IZiviPlanningBundle\Entity\Entity
 *
 * @ORM\HasLifecycleCallbacks()
 */
abstract class Entity
{
	/**
	 * @var integer $id
	 *
	 * @JMS\Groups({"List"})
	 * @ORM\Id
	 * @ORM\Column(name="id", type="integer")
	 * @ORM\GeneratedValue(strategy="AUTO")
	 */
	protected $id;

	/**
	 * @var datetime $createdAt
	 *
	 * @Gedmo\Timestampable(on="create")
	 * @JMS\SerializedName("createdAt")
	 * @ORM\Column(name="created_at", type="datetime")
	 */
	protected $createdAt;

	/**
	 * @var datetime $updatedAt
	 *
	 * @Gedmo\Timestampable(on="update")
	 * @JMS\SerializedName("updatedAt")
	 * @ORM\Column(name="updated_at", type="datetime")
	 */
	protected $updatedAt;

	/**
	 * Get id
	 *
	 * @return integer
	 */
	public function getId()
	{
		return $this->id;
	}

	/**
	 * Get created at datetime
	 *
	 * @return datetime
	 */
	public function getCreatedAt()
	{
		return $this->createdAt;
	}

	/**
	 * Get updated at datetime
	 *
	 * @return datetime
	 */
	public function getUpdatedAt()
	{
		return $this->updatedAt;
	}

	/**
	 * get activity as string
	 *
	 * @return string
	 */
	public function __toString()
	{
		return (string)$this->getId();
	}

	public function getProperties()
	{
		$retval = array();
		foreach ($this as $key => $value) {
			$retval[] = $key;
		}
		return $retval;
	}
}
